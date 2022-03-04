from App.models import remindersys
from django.contrib.auth.forms import UserCreationForm 

class reminderForm():
    model=remindersys
    fields=('id','set_time','tasks','set_date',)