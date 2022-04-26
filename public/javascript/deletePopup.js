function showDeletePopup($id) {
    if(confirm('Czy chcesz usunąć tego użytkownika?')) {
        fetch(`/manage/user/delete/${$id}`, {
            method: 'DELETE'
        }).then(res => window.location.reload());
    }
}