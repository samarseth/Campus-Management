import { throws } from 'assert';
import { TAG } from './TAG';
import { Injectable } from '@angular/core';

@Injectable()
export class CustomValidator {


    private static _validations: Map<string, Function> = new Map([[TAG.REQ, CustomValidator.required],
                                                                [TAG.EMAIL, CustomValidator.validateEmail],
                                                                [TAG.NSP, CustomValidator.noSpace],
                                                                [TAG.NLT, CustomValidator.noLetter],
                                                                [TAG.NNB, CustomValidator.noNumber]])

    /**
     * Methode used to check object dynamicly, each validation is possible if the validator correspondant have been created
     * @param value value the object to check, in link with the rules, that doesnt work if rules not created see UserBasicValidator
     * @param rules rules the different controle to do on each attribut of the value
     */
    public static validate(value: any, rules: any) {
        if (rules != null && value != null) { // If one of both is null no need to continue that won't work
            for (const key in rules) { // Iteration on each attributs which should be the same than value
                if (rules.hasOwnProperty(key) && value.hasOwnProperty(key)) { // Fro in verification
                    const attributCtrl = rules[key];

                    for (const ctrl of attributCtrl) { // Iteration on each control for an attribut

                        // Execution of the methode linked to the attribut, return false if test not pass
                        if (!CustomValidator._validations.get(ctrl.test)(value[key], ctrl.max, ctrl.min)) {
                            if (value.valid != null) {
                                value.valid = false;
                            }
                            return false;
                        }
                    }
                }
            }
            if (value.valid != null) {
                value.valid = true;
            }
            return true;
        } else {
            // tslint:disable-next-line:max-line-length
            throw Error('To use Sopra Steria validator, you need to pass the value to validate and the rules to check(Ex UserBasicValidator)');
        }
    }



    private static required(field: any, max?: number, min?: number) {
        if (typeof field === 'number') {
            return (field > 0);
        } else if (typeof field === 'string') {
            return (field.length > 0 && max && max >= field.length && min &&  min <= field.length);
        } else if (field instanceof Date) {
            return (field != null);
        } else if (typeof field === 'boolean') {
            return (field != null);
        }

    }

    private static noSpace(field: string) {
        if (field.indexOf(' ') !== -1) {
            console.error('probleme space : ' + field);
            return false;
        } else {
            return true;
        }
    }


    private static validateEmail(email: string) {
        // tslint:disable-next-line:max-line-length
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(email)) {
            return true;
        } else {
            console.error('probleme email : ' + email);
            return false;
        }
    }

    private static noNumber(field: String) {
        const tempo = field.match('.*\\d+.*');
        if (tempo === null ) {
            return true;
        } else {
            console.error('probleme no Number : ' + tempo);
            return false;
        }
    }

    private static noLetter(field: string) {
        if (/[a-zA-Z]/.test(field)) {
            console.error('probleme no Letter : ' + field);
            return false;
        } else {
            return true;
        }
    }


}
