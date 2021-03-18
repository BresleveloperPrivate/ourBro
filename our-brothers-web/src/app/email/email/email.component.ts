import { FormGroup, FormControl } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.scss']
})
export class EmailComponent implements OnInit {
  constructor(private firestore: AngularFirestore) {
    console.log('hii emaule');
  }

  myArray: any[] = [];

  ngOnInit() {
    this.firestore

      .collection('emails')
      .get()
      .subscribe(ss => {
        ss.docs.forEach(doc => {
          this.myArray.push(doc.data());
        });
        console.log(this.myArray);
      });
  }
  form = new FormGroup({
    to: new FormControl(''),
    from: new FormControl(''),
    subject: new FormControl(''),
    massege: new FormControl('')
  });
  onSubmit() {
    // this.firestore.collection('emails').doc('pRxcwwzzBbrdLHGTiVJX').set({
    //   to: this.form.value.to,
    //   from: this.form.value.from,
    //   subject: this.form.value.subject,
    //   massege: this.form.value.massege,
    // }, { merge: true }).then(res => {
    //   console.log(res);
    //   this.form.reset();
    // })
    //   .catch(e => {
    //     console.log(e);
    //   })
    //

    this.firestore
      .collection('emails')
      .add({
        to: this.form.value.to,
        from: this.form.value.from,
        subject: this.form.value.subject,
        massege: this.form.value.massege
      })
      .then(res => {
        console.log(res);
        this.form.reset();
      })
      .catch(e => {
        console.log(e);
      });
  }
}
