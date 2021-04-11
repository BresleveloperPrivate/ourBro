import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { of, Observable } from 'rxjs';
import { concatMap, delay, repeat } from 'rxjs/operators';

import { User, Contact } from 'models';
import { AuthService } from '../shared/services/auth.service';
import { DataService } from '../shared/services/data.service';
import { ContactForm } from '../shared/components/contact-form/contact-form.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  public videoMuted = true;
  public user: User;
  public loadingUser = true;
  public postingContact = false;
  public src1$: any;
  public src2$: any;

  constructor(private authService: AuthService, private dataService: DataService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.authService.user.subscribe(user => {
      this.user = user;
      this.loadingUser = false;
    });

    this.src1$ = of(
      '../../assets/img/home-page/n-h-1.jpg',
      '../../assets/img/home-page/n-h-2.jpg',
      '../../assets/img/home-page/n-h-3.jpg',
      '../../assets/img/home-page/n-h-4.jpg'
      // '../../assets/img/home-page/h-p-5.jpeg',
      // '../../assets/img/home-page/h-p-6.jpg'
    ).pipe(
      concatMap((url, idx) => (idx == 0 ? of(url) : of(url).pipe(delay(5000)))),
      repeat()
    );

    this.src2$ = of(
      '../../assets/img/home-page/n-h-5.jpg',
      '../../assets/img/home-page/n-h-6.jpg',
      '../../assets/img/home-page/n-h-7.jpg',
      '../../assets/img/home-page/n-h-8.jpg'
      // '../../assets/img/home-page/h-p-11.jpeg',
      // '../../assets/img/home-page/h-p-12.jpg'
    ).pipe(
      concatMap((url, idx) => (idx == 0 ? of(url) : of(url).pipe(delay(5000)))),
      repeat()
    );
  }

  onContactSubmit(form: ContactForm) {
    const parsedContact: Contact = {
      ...form,
      date: Date.now()
    };

    this.postingContact = true;
    this.dataService
      .postContact(parsedContact, this.user)
      .then(() => this.toastr.success('שליחת הודעה בוצעה בהצלחה'))
      .catch(() => this.toastr.error('שליחת הודעה נכשלה'))
      .finally(() => (this.postingContact = false));
  }

  endregistarted() {
    alert("ההרשמה נסגרה ")
    console.log("sxdfvghjkjhgf");
    
  }
}
