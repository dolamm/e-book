import React, {Components} from 'react';
import $ from 'jquery';
import '../../css/notification/notification.css';
import {TiTick} from 'react-icons/ti';
import '@fortawesome/fontawesome-free/css/all.min.css';

const success = (message) => {  
        const $notificontent = $('<span class="notify-message success"> <i class="fa-solid fa-circle-check"></i>' + message + '</span>');
        const $notification = $('<div class="notification"></div>');
        $notification.append($notificontent);
        $('body').append($notification);
        $notification.fadeIn('slow');
        $notification.delay(2000).fadeOut('slow', () => {
            $notification.remove();
        });
}
const error = (message) => {
    const $notificontent = $('<span class="notify-message error" ><i class="fa-solid fa-bug"></i>' + message + '</span>');
    const $notification = $('<div class="notification"></div>');
    $notification.append($notificontent);
    $('body').append($notification);
    $notification.fadeIn('slow');
    $notification.delay(2000).fadeOut('slow', () => {
        $notification.remove();
    });
}
const warning = (message) => {
    const $notificontent = $('<span class="notify-message warning" ><i class="fa-solid fa-exclamation-triangle"></i>' + message + '</span>');
    const $notification = $('<div class="notification"></div>');
    $notification.append($notificontent);
    $('body').append($notification);
    $notification.fadeIn('slow');
    $notification.delay(2000).fadeOut('slow', () => {
        $notification.remove();
    });
}
const info = (message) => {
    const $notificontent = $('<span class="notify-message info" ><i class="fa-solid fa-info-circle"></i>' + message + '</span>');
    const $notification = $('<div class="notification"></div>');
    $notification.append($notificontent);
    $('body').append($notification);
    $notification.fadeIn('slow');
    $notification.delay(2000).fadeOut('slow', () => {
        $notification.remove();
    });
}
export function Notification (message, type) {
        switch (type) {
            case 'success':
                success(message);
                break;
            case 'error':
                error(message);
                break;
            case 'warning':
                warning(message);
                break;
            case 'info':
                info(message);
                break;
            default:
                info(message);
                break;
        }
}