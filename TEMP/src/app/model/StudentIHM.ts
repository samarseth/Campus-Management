/**
 * Created by pbazin on 7/18/2017.
 */
import { Student } from './Student';

export class StudentIHM extends Student {
  public valid: boolean;

  constructor() {
    super();
    this.valid = false;
  }


  public convertStudentToStudentIHM(student: Student) {
    this.valid = true;
    this.registrationNumber = student.registrationNumber;
    this.address = student.address;
    this.rollNumber = student.rollNumber;
    this.firstName = student.firstName;
    this.middleName = student.middleName;
    this.lastName = student.lastName;
    this.dateBirth = new Date(student.dateBirth);
    this.mobileNumber = student.mobileNumber;
    this.emailAddress = student.emailAddress;
  }

}

















