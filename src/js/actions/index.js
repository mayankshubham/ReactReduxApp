const EDIT_FRIEND_DATA = "EDIT_FRIEND_DATA"

export function editFriendData(key) {
	return {type: EDIT_FRIEND_DATA, key: key}
}
