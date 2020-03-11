import { Component, OnInit, OnDestroy } from "@angular/core"
import {Router} from "@angular/router"
import { Subscription, from } from 'rxjs';
import{RxwebValidators}from '@rxweb/reactive-form-validators';
import { RxFormBuilder, IFormGroup } from '@rxweb/reactive-form-validators';

import { Flat } from '@app/models';
import { AbstractFlat } from '../domain/abstract-flat';
import { anonymous } from '@rxweb/angular-router';
import { FormGroup } from '@angular/forms';

@anonymous()
@Component({
    selector: "app-flat-add",
    templateUrl: './flat-add.component.html'
})
export class FlatAddComponent extends AbstractFlat implements OnInit, OnDestroy {
    flat: Flat;
    // flatFormGroup:FormGroup;
    result:any;
    subscription: Subscription;

    constructor(private formBuilder: RxFormBuilder,private router:Router) {
        super();
    }

    ngOnInit(): void {
        
        this.flat = new Flat();
        this.flatFormGroup = this.formBuilder.formGroup(this.flat) as IFormGroup<Flat>;
        // this.flatFormGroup=this.formBuilder.group({
        //     flatNumber:['',RxwebValidators.required()],
        //     flatName:['',RxwebValidators.required()],
        //     address:['',RxwebValidators.required()],
        //     locality:['',RxwebValidators.required()],
        // })
        
    }

    onAddFlat(){
        this.post({body:this.flat}).subscribe(t=>{
            this.result=t;
            console.log(this.result);
        })

        this.flatFormGroup.reset();
        this.router.navigateByUrl('/flat');
    }
    onGoBack(){
        this.router.navigateByUrl('/flat');
    }

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
