import {Student} from './Student';
export class StudentDetails extends Student {

  gender: string;
  tenthPercentage: number;
  tenthBoard: string;
  tenthPassingYear: number;
  diploma: number;
  twelfthPercentage: number;
  twelftPassing_year: number;
  twelftBoard: string;
  graduationCourse: string;
  graduationPourcentage: number;
  graduationPassing_year: number;
  graduationUniversity: string;
  postgraduationCourse: string;
  postgraduationPourcentage: number;
  postgraduationPassingYear: number;
  postgraduationUniversity: string;
  student_photo_path: string;
  submited: boolean;
  submitedDatetime: Date;


  constructor(student?: StudentDetails) {
    super(student);
    if ( student != null ) {
      this.gender = student.gender;
      this.tenthPercentage = student.tenthPercentage;
      this.tenthBoard = student.tenthBoard;
      this.tenthPassingYear = student.tenthPassingYear;
      this.diploma = student.diploma;
      this.twelfthPercentage = student.twelfthPercentage;
      this.twelftPassing_year = student.twelftPassing_year;
      this.twelftBoard = student.twelftBoard;
      this.graduationCourse = student.graduationCourse;
      this.graduationPourcentage = student.graduationPourcentage;
      this.graduationPassing_year = student.graduationPassing_year;
      this.graduationUniversity = student.graduationUniversity;
      this.postgraduationCourse = student.postgraduationCourse;
      this.postgraduationPourcentage = student.postgraduationPourcentage;
      this.postgraduationPassingYear = student.postgraduationPassingYear;
      this.postgraduationUniversity = student.postgraduationUniversity;
      this.student_photo_path = student.student_photo_path;
      this.submited = student.submited;
      this.submitedDatetime = student.submitedDatetime;
    }
  }
}
