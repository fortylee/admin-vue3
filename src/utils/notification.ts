import { notification } from 'ant-design-vue'

type NotificationType = 'info' | 'warning' | 'error' | 'success';
const openNotification = (type: NotificationType, message: string) => {
    notification[type]({
        message,
        duration:2
    })
}
export default openNotification