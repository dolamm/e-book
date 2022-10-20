import 'bootstrap/dist/css/bootstrap.min.css'
import "../../components/css/Message.css"

export default function Channel() {
    return(
        <div class="col-md-4 col-xl-3 chat"><div class="card mb-sm-3 mb-md-0 contacts_card">
					<div class="card-header">
						<h3>User is online</h3>
					</div>
					<div class="card-body contacts_body">
						<ui class="contacts">
						<li class="active">
							<div class="d-flex bd-highlight">
								<div class="img_cont">
									<img src="https://static.turbosquid.com/Preview/001292/481/WV/_D.jpg" class="rounded-circle user_img"/>
									<span class="online_icon"></span>
								</div>
								<div class="user_info">
									<span>Khalid</span>
								</div>
							</div>
						</li>
						</ui>
					</div>
					<div class="card-footer"></div>
				</div></div>
    )
}