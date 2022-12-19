import 'bootstrap/dist/css/bootstrap.min.css'

const Message = ({message}) => {
    return (
        <div class="card-body msg_card_body">
        <div class="d-flex justify-content-start mb-4">
            <div class="img_cont_msg">
                <img src={message.avatar} class="rounded-circle user_img_msg"/>
            </div>
            <div class="msg_cotainer">
                {message.text}
                <span class="msg_time">{message.user}</span>
            </div>
        </div>
        </div>
    )
}
// Message function

// function Message({ message, user, imgURL, time }) {
//     return (
//         <div class="card-body msg_card_body">
//             <div class="d-flex justify-content-start mb-4">
// 				<div class="img_cont_msg">
// 					<img src={imgURL} class="rounded-circle user_img_msg"/>
// 				</div>
// 				<div class="msg_cotainer">
// 					{message}
// 					<span class="msg_time">{time}</span>
// 				</div>
// 			</div>

//             {/* Sender's message */}
// 			<div class="d-flex justify-content-end mb-4">
// 				<div class="msg_cotainer_send">
// 					Hi Khalid i am good tnx how about you?
// 					<span class="msg_time_send">8:55 AM, Today</span>
// 				</div>
// 				<div class="img_cont_msg">
// 					<img src="" class="rounded-circle user_img_msg"/>
// 				</div>
// 			</div>
//         </div>
//     )
// }

export default Message;