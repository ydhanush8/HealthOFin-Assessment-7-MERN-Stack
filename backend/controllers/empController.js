import {Employee,Dashboard} from '../models/model.js'
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';


class EmpController {
    async createEmp (req, res){
        try {
            // const emp = await Mern.create(req.body);
            const emp = new Employee(req.body);
            const savedEmp = await emp.save();
            res.status(201).json(savedEmp);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };
    async createEmpInDashboard (req, res){
        try {
            // const emp = await Mern.create(req.body);
            const emp = new Dashboard(req.body);
            const savedEmp = await emp.save();
            res.status(201).json(savedEmp);
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    };
    async getEmpInDashboard (req, res) {
        try {
            const emp = await Dashboard.find();
            res.status(200).json(emp);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
    async deleteEmpInDashboard(req, res){
        try {
            const emp = await Dashboard.findByIdAndDelete(req.params.id);
            if (!emp) {
                return res.status(404).json({ message: 'Emp not found' });
            }
            res.status(200).json({ message: 'Employee deleted successfully' });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async loginEmp(req, res){
        try {
            const emp = await Employee.findOne({ email: req.body.email });
            if (!emp) {
                return res.status(404).json({ message: 'Emp not found' });
            }
            const isMatch = await bcrypt.compare(req.body.password, emp.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid employee password' });
            }
            const token = jwt.sign({ id: emp._id }, process.env.JWT_SECRET);
            res.status(200).json({ token, emp });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }

    async changePassword(req, res){
        try {
            const emp = await Employee.findOne({email:req.body.email})
            console.log(emp);
            if (!emp) {
                return res.status(404).json({ message: 'Emp not found' });
            }
            const isMatch = await bcrypt.compare(req.body.oldPassword, emp.password);
            if (!isMatch) {
                return res.status(401).json({ message: 'Invalid password' });
            }
            const salt = await bcrypt.genSalt(10);
            const newPassword= await bcrypt.hash(req.body.newPassword, salt);
            const updatedEmp = await emp.updateOne({ password: newPassword }, { new: true });
            res.status(200).json(updatedEmp);
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    }
}

export default new EmpController();

