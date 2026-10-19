import User from "../../models/userModel.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

//STUDENT SIGNUP
const signup = async (req, res) => {
  try {
    const { name, email, password, confirmPassword } = req.body;

    if (password !== confirmPassword) {
      return res
        .status(400)
        .json({ success: false, message: "Passwords do not match" });
    }

    const normalizedEmail = email.trim().toLowerCase();

    const existingUser = await User.findOne({ email:normalizedEmail });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists, you can login",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = new User({
      name: name.trim(),
      email: normalizedEmail,
      password: hashedPassword,
      role: "student",
    });

    await newUser.save();

    res
      .status(201)
      .json({ success: true, message: "Student registered successfully" });
  } catch (error) {
    if (error.code === 11000) {
  return res.status(409).json({
    success: false,
    message: "This email is already registered.",
  });
}
    console.error("Signup Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
        const normalizedEmail = email.trim().toLowerCase();


    const existingUser = await User.findOne({ email: normalizedEmail }).select("+password");
    const errorMSG = "Login failed: email or password is wrong";

    if (!existingUser) {
      return res.status(403).json({ success: false, message: errorMSG });
    }

    if (existingUser.isBlocked) {
      return res.status(403).json({ message: "Your account has been blocked. Contact support"});
    }

    const isPassEqual = await bcrypt.compare(password, existingUser.password);
    if (!isPassEqual) {
      return res.status(403).json({ success: false, message: errorMSG });
    }
if (!process.env.JWT_SECRET) {
  throw new Error("JWT_SECRET is missing from .env");
}
    const jwtToken = jwt.sign(
      { email: existingUser.email, _id: existingUser._id.toString() },
      process.env.JWT_SECRET,
      { expiresIn: "24h" }
    );

    res.cookie("token", jwtToken, {
      httpOnly: true,
      secure: false,
      sameSite: "lax",
      maxAge: 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "Login success",
      user: {
                _id: existingUser._id,

        email: existingUser.email,
        name: existingUser.name,
        role: existingUser.role,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export { signup, login }