import { Component } from "@angular/core";

@Component({
    selector: 'students',
    template: '<h2>{{getCurrentDate()}}</h2>'
})

export class StudentComponent {

    title = "My List of Students";

    getTitle() {
        return this.title;
    }

    getCurrentDate(){
        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        return `${mm}/${dd}/${yyyy}`
    }
}