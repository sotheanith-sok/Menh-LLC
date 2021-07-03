import { TScrollTarget } from "./Types";

/*Interface represents internal states of state managment 
 * 
 */
export interface IState {
    scrollTarget: TScrollTarget,
    companyName: string,
    companySlogan: string,
    operatingDays: string,
    operatingHours: string,
    companyEmail: string,
    companyPhoneNumber: string,
    companyAddress: string,
}
