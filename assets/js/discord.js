function discord_message(message) {
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://discord.com/api/webhooks/1183766741759840326/fLGBZhCEM5Jx-J13XGimQOqT4qR4hpPN4r8sO_01gzQoEF_aMmnPhnAio0L7hhuI0uZt", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        'content': message,
        'username':'AI',
    }));
    close();
}