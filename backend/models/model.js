import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const dashboardSchema = new mongoose.Schema(
    {
        name:{
            type:String
        },
        jobTitle:{
            type:String
        },
        department:{
            type:String
        },
        location:{
            type:String
        },
        age:{
            type:Number
        },
        salary:{
            type:Number
        }
    }, {
        timestamps: true
}) 

const employeeSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    oldPassword: {
        type: String
    },
    newPassword: {
        type: String
    }
    }, {
    timestamps: true
});

employeeSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});


// export default mongoose.model('Employee', employeeSchema);
export const Dashboard = mongoose.model('Dashboard', dashboardSchema);
export const Employee = mongoose.model('Employee', employeeSchema);