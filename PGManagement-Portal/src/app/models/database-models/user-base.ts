import { prop, propObject, propArray, required, maxLength, range } from "@rxweb/reactive-form-validators"
import { gridColumn } from "@rxweb/grid"


export class UserBase {

        //#region userId Prop
        @prop()
        userId: number;
        //#endregion userId Prop


        //#region firstName Prop
        @maxLength({ value: 50 })
        firstName: string;
        //#endregion firstName Prop


        //#region lastName Prop
        @maxLength({ value: 50 })
        lastName: string;
        //#endregion lastName Prop


        //#region mobileNumber Prop
        @required()
        mobileNumber: number;
        //#endregion mobileNumber Prop


        //#region email Prop
        @maxLength({ value: 50 })
        email: string;
        //#endregion email Prop


        //#region applicationLocaleId Prop
        @prop()
        applicationLocaleId: number;
        //#endregion applicationLocaleId Prop


        //#region applicationTimeZoneId Prop
        @prop()
        applicationTimeZoneId: number;
        //#endregion applicationTimeZoneId Prop


        //#region languageCode Prop
        @maxLength({ value: 3 })
        languageCode: string;
        //#endregion languageCode Prop


        //#region password Prop

        @maxLength({ value: 132 })
        password: any;
        //#endregion password Prop


        //#region salt Prop
     
        @maxLength({ value: 140 })
        salt: any;
        //#endregion salt Prop


        //#region loginBlocked Prop
        @prop({ defaultValue: 1 })
        loginBlocked: boolean;
        //#endregion loginBlocked Prop


        //#region statusId Prop
        @prop({ defaultValue: 1 })
        @range({ minimumNumber: 1, maximumNumber: 2147483647 })
        @required()
        statusId: number;
        //#endregion statusId Prop















}