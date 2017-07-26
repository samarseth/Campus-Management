/**
 * Created by pbazin on 7/14/2017.
 */
export class Campus {

  id: number;
  campusCode: string;
  campusDate: Date;
  campusOff: boolean
  campusYear: string;
  lmsCampusPassword: string;
  lmsCourseName: string;
  lmsGroupName: string;
  lmsRole: string;

  constructor(campus: Campus) {
    if ( campus != null ) {
      this.id = campus.id;
      this.campusCode = campus.campusCode;
      this.campusDate = campus.campusDate;
      this.campusOff = campus.campusOff;
      this.campusYear = campus.campusYear;
      this.lmsCampusPassword = campus.lmsCampusPassword;
      this.lmsCourseName = campus.lmsCourseName;
      this.lmsGroupName = campus.lmsGroupName;
      this.lmsRole = campus.lmsRole;
    }
  }

  public isEmpty(): Boolean {
    return ( this.id == null
      && this.campusCode == null
      && this.campusDate == null
      && this.campusOff == null
      && this.campusYear == null
      && this.lmsCampusPassword == null
      && this.lmsCourseName == null
      && this.lmsGroupName == null
      && this.lmsRole == null
    )
  }
}
