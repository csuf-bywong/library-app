import Controller from '@ember/controller';
import {
  match,
  gte,
  and,
  not
} from '@ember/object/computed';

export default Controller.extend({
  isValidEmail: match('emailAddress', /^.+@.+\..+$/),
  isMessageEnoughLong: gte('message.length', 5),

  isValid: and('isValidEmail', 'isMessageEnoughLong'),
  isDisabled: not('isValid'),

  actions: {
    sendMessage: function() {
      var email = this.get('emailAddress');
      var message = this.get('message');
      alert('Message being sent... ');

      var responseMessage = 'We got your message, and we\'ll get in touch soon';
      this.set('responseMessage', responseMessage);
      this.set('emailAddress', '');
      this.set('message', '');
    }
  }
});
