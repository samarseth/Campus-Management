import { Address } from './Address';
/**
 * Created by pbazin on 7/14/2017.
 */
export class Student {
  id: number;
  registrationNumber: string;
  address: Address;
  rollNumber: string;
  firstName: string;
  middleName: string;
  lastName: string;
  dateBirth: Date;
  mobileNumber: string;
  emailAddress: string;
  adhocIndicator: boolean;
  passedValidation: boolean;
  status: string;

  constructor(student?: Student) {
    if (student != null) {
      this.id = student.id;
      this.registrationNumber = student.registrationNumber;
      this.address = student.address;
      this.rollNumber = student.rollNumber;
      this.firstName = student.firstName;
      this.middleName = student.middleName;
      this.lastName = student.lastName;
      this.dateBirth = new Date(student.dateBirth);
      this.mobileNumber = student.mobileNumber;
      this.emailAddress = student.emailAddress;
      this.adhocIndicator = student.adhocIndicator;
      this.passedValidation = student.passedValidation;
      this.status = student.status;
    }
  }

}

