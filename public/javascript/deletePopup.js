function showDeletePopup($id) {
    if(confirm('Czy chcesz usunąć tego użytkownika?')) {
        fetch(`/api/user/delete/${$id}`, {
            method: 'DELETE'
        }).then(res => window.location.reload());
    }
}