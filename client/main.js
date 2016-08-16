import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';

import './main.html';

Template.listing.helpers({
    entries: function () {
        //get a cursor to the entire collection
        return Messages.find();
    },
    formattedDate: function () {
        return this.date ? moment(this.date).format("ddd, DD-MM-YYYY HH:mm:ss") : '';
    }
});

Template.newEntry.events({
    'submit #entryForm': function (event) {
        //prevent form submission
        event.preventDefault();

        //get value of the text area
        var c = event.target.querySelector('#content').value;

        //insert into the Collection
        // Messages.insert({content: c, date: new Date()});
        Meteor.call('addMessage', {content: c});

        //reset form fields
        event.target.reset();
    }
});
