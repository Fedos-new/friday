import axios from 'axios';


const instance = axios.create({
	baseURL: 'https://neko-back.herokuapp.com/2.0/',
	// baseURL: 'http://localhost:7542/2.0/',
	withCredentials: true
})


export const passwordRecoveryAPI = {
	sendEmail(email: string) {
		return instance.post('auth/forgot',
			{
				email: email,
				from: 'mariya.syrokvash@yandex.ru',
				message: `<div style="background-color: lime; padding: 15px">
										<p>Please, click on the link and enter a new password</p>
										<a href='https://fedos-new.github.io/friday/#/new_pass/$token$'>Recovery password</a>
									</div>
									`
			})
	}
}