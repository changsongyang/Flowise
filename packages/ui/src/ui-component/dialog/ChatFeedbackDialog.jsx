import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import PropTypes from 'prop-types'

// components
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'

// store
import { HIDE_CANVAS_DIALOG, SHOW_CANVAS_DIALOG } from '@/store/actions'
import useNotifier from '@/utils/useNotifier'

// Project imports
import ChatFeedback from '@/ui-component/extended/ChatFeedback'

const ChatFeedbackDialog = ({ show, dialogProps, onCancel }) => {
    const dispatch = useDispatch()

    useNotifier()

    useEffect(() => {
        if (show) dispatch({ type: SHOW_CANVAS_DIALOG })
        else dispatch({ type: HIDE_CANVAS_DIALOG })
        return () => dispatch({ type: HIDE_CANVAS_DIALOG })
    }, [show, dispatch])

    return (
        <Dialog onClose={onCancel} open={show}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{dialogProps.title || 'Allowed Domains'}</DialogTitle>
                </DialogHeader>
                <ChatFeedback dialogProps={dialogProps} />
            </DialogContent>
        </Dialog>
    )
}

ChatFeedbackDialog.propTypes = {
    show: PropTypes.bool,
    dialogProps: PropTypes.object,
    onCancel: PropTypes.func,
    onConfirm: PropTypes.func
}

export default ChatFeedbackDialog
