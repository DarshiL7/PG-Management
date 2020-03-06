import { Component, OnInit, OnDestroy } from "@angular/core"

import { AbstractRental } from '../domain/abstract-rental';

import { Subscription } from 'rxjs';
import { List } from '@rxweb/generics';
import { vRentalRecord } from '@app/models';
import { anonymous } from '@rxweb/angular-router';


@anonymous()
@Component({
    selector:"app-rental-list",
    templateUrl:'./rental-list.component.html'
})
export class RentalListComponent extends AbstractRental implements OnInit, OnDestroy {
    vrental:List<vRentalRecord>;
    subscription: Subscription;
    result:any;

 

    ngOnInit(): void {
        this.subscription = this.get().subscribe((t:List<vRentalRecord> ) => {
            this.result = t;
        })
      
    }

 

    ngOnDestroy(): void {
        if (this.subscription)
            this.subscription.unsubscribe();
    }

}
