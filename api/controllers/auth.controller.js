import User from "../models/user.model.js";

//to hash our password
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
    const { username, email, password } = req.body;

    if (
        !username ||
        !email ||
        !password ||
        username === "" ||
        email === "" ||
        password === ""
    ) {
        return res.status(400).json({
            message: "Please fill all the fields",
        });
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
        username,
        email,
        password: hashedPassword,
    });

    //generate error message for more than once submission
    try {
        //save inside database
        await newUser.save();
        res.json("Signup successful");
    } catch (err) {
        // display error message
        res.status(500).json({ message: err.message });
    }
};
