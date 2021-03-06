const mongoose = require('mongoose');

const ChatMessageSchema = new mongoose.Schema({
    chatRoomId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Chatroom',
    },
    fromUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    toUserId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    chatText: {
        type: String,
    },
    checkChat: {
        type: Boolean,
    },
    createdAt: {
        type: String,
    },
    outUser: {
        type: String,
        default: ''
    },
});

ChatMessageSchema.virtual('chatMessageId').get(function () {
    return this._id.toHexString();
});

module.exports = mongoose.model('ChatMessage', ChatMessageSchema);
