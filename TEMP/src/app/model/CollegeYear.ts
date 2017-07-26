import { College } from './College';
import { Campus } from './Campus';

export class CollegeYear {
  id: number;
  college: College;
  year: string;
  campus: Campus;


  constructor(college: College, year: string, campus: Campus) {
    this.college = college;
    this.year = year;
    this.campus = campus;
  }
}
