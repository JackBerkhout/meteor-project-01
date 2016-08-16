import {Meteor} from 'meteor/meteor';

Meteor.methods({
    addMessage: function (messageData) {
        //check if the user is logged in
        if (!Meteor.userId()) {
            throw new Meteor.Error('Not authorized');
        }

        //message needs to have content
        if (!messageData.content) {
            throw new Meteor.Error('No content in message');
        }

        messageData.date = new Date();
        messageData.owner = Meteor.userId();

        Messages.insert(messageData);
    }
});

Meteor.startup(function () {
    // code to run on server at startup
});
