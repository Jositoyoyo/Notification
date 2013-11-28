
    document.addEventListener("deviceready", onDeviceReady, false);

    function onDeviceReady() {
        // Empty
    }

  
        function alertDismissed() {
            // do something
        }

    // Show a custom alertDismissed
    //
    function showAlert() {
        navigator.notification.alert(
            'This is a Notification !!',  // message
            alertDismissed,         // callback
            'Alert Notification',            // title
            'Acept'                  // buttonName
        );
    }

    // Beep three times
    //
    function playBeep() {
        navigator.notification.beep();
    }

    // Vibrate for 1 seconds
    //
    function vibrate() {
        navigator.notification.vibrate(1000);
    }


    // process the confirmation dialog result
    function onConfirm(buttonIndex) {
        alert('You selected button ' + buttonIndex);
    }
    
    // Show a custom confirmation dialog
    //
    function showConfirm() {
        navigator.notification.confirm(
            'You are the winner!', // message
             onConfirm,            // callback to invoke with index of button pressed
            'Game Over',           // title
            ['Restart','Exit']         // buttonLabels
        );
    }

 