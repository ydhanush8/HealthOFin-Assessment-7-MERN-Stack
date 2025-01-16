import express from 'express';
import EmpController from '../controllers/empController.js';


const router = express.Router();

router.post('/signup', EmpController.createEmp);
router.post('/employeeAdd', EmpController.createEmpInDashboard);
router.get('/dashboardEmp', EmpController.getEmpInDashboard);
router.delete('/dashboardEmp/:id', EmpController.deleteEmpInDashboard);
router.post('/signin', EmpController.loginEmp);
router.post('/change-password', EmpController.changePassword);


export default router; 