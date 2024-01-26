from django.shortcuts import render, redirect
from django.core.mail import send_mail
from django.contrib import messages

def index(request):
    return render(request,'index.html')

def about(request):
    return render(request,'about.html')

def contact(request):
    return render(request,'contact.html')

def resume(request):
    return render(request,'resume.html')

def service(request):
    return render(request,'service.html')

def sendmail(request):
    if request.method == 'POST':
        subject = request.POST['subject']
        message = f'Name : {request.POST["name"]} \nEmail : {request.POST["email"]} \nMessage : \n\n{request.POST["message"]}'

        send_mail(
            subject,
            message,
            "takemynumber933withakissfree@gmail.com",
            ["sahil.murhekar2004@gmail.com"],
            fail_silently=False,
        )
        messages.success(request, "Mail Sent Successfully")
        return render(request, 'contact.html')

    else:
        messages.success(request, "Mail Not Sent")
        return render(request, 'contact.html')

