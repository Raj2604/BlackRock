const express = require('express');
require('dotenv').config();
const app = express();
const authRouter = require('./routes/authRoute');

// const userRoutes = require("./routes/User");
// const profileRoutes = require("./routes/Profile");
// const paymentRoutes = require("./routes/Payments");
// const courseRoutes = require("./routes/Course");

const database = require('./config/database');
// const cookieParser = require('cookie-parser');
const cors = require('cors');
// const {cloudinaryConnect} = require('./config/cloudinary');
// const fileUpload = require("express-fileupload");


const PORT = process.env.PORT || 4000;

database.dbConnect();
app.use(express.json());
// app.use(cookieParser());

app.use(
	cors({
		origin: "*",
		credentials: true,
	})
);


// app.use(
// 	fileUpload({
// 		useTempFiles:true,
// 		tempFileDir:"/tmp",
// 	})
// )

//cloudinary connect
// cloudinaryConnect();

//routes
app.use('/api/auth', authRouter);
// app.use("/api/v1/auth", userRoutes);
// app.use("/api/v1/profile", profileRoutes);
// app.use("/api/v1/course", courseRoutes);
// app.use("/api/v1/payment", paymentRoutes);
//global error handler
app.use((err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.status = err.status || 'error';
    res.status(err.statusCode).json({
        status: err.status,
        message: err.message,
    });
});

app.get('/',( req,res )=>{
    return res.json({
        success:true,
        message:'Your server is running'
    })
})


app.listen(PORT,() => {
    console.log(`App is running At: ${PORT}`);
})