import { TAG } from './TAG';
export class UserBasicValidator {




    registrationNumber: Array<any>;
    address: Array<any>;
    rollNumber: Array<any>;
    firstName: Array<any>;
    middleName: Array<any>;
    lastName: Array<any>;
    dateBirth: Array<any>;
    mobileNumber: Array<any>;
    emailAddress: Array<any>;



    constructor() {
        this.registrationNumber = new Array({'test': TAG.REQ, 'min': 2, 'max': 6});
        this.registrationNumber.push({'test': TAG.NLT});

        // this.address = new Array(TAG.REQ);
        this.rollNumber = new Array({'test': TAG.REQ, 'min': 1, 'max': 6});
        this.rollNumber.push({'test': TAG.NLT});


        this.firstName = new Array({'test': TAG.REQ, 'min': 2, 'max': 30});
        this.firstName.push({'test': TAG.NNB});

        this.middleName = new Array({'test': TAG.REQ, 'min': 2, 'max': 30});
        this.middleName.push({'test': TAG.NNB});

        this.lastName = new Array({'test': TAG.REQ, 'min': 2, 'max': 30});
        this.lastName.push({'test': TAG.NNB});

        this.dateBirth = new Array({'test': TAG.REQ});

        this.mobileNumber = new Array({'test': TAG.REQ, 'min': 9, 'max': 10});
        this.mobileNumber.push({'test': TAG.NLT});

        this.emailAddress = new Array({'test': TAG.REQ, 'min': 5, 'max': 50});
        this.emailAddress.push({'test': TAG.EMAIL});
    }

}
