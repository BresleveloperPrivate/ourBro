import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from "@angular/fire/firestore";
import { FormControl, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-send-email',
  templateUrl: './send-email.component.html',
  styleUrls: ['./send-email.component.scss']
})
export class SendEmailComponent implements OnInit {

  constructor(private firestore: AngularFirestore) {}

  myArray : any [] = []  
   ngOnInit() {
  this.firestore
    .collection("testCollection")
    .get()
    .subscribe((ss) => {
      ss.docs.forEach((doc) => {
        this.myArray.push(doc.data());
      });
      console.log(this.myArray)
    });
    }
      form = new FormGroup({
          newValue: new FormControl('')
      })
      onSubmit() { 
          this.firestore.collection('testCollection').add({
              field: this.form.value.newValue
          })
          .then(res => {
              console.log(res);
              this.form.reset();
          })
          .catch(e => {
              console.log(e);
          })
      }

}
