[stage b277f9f] add redux, them tinh nang
 18 files changed, 530 insertions(+), 305 deletions(-)
 create mode 100644 changelog.txt
 rewrite src/components/Books/BookList.js (61%)
 rewrite src/components/LoginComponents/SignOut.js (96%)
 create mode 100644 src/redux/Store.js
 create mode 100644 src/redux/actions/BookAction.js
 create mode 100644 src/redux/actions/UserAction.js
 create mode 100644 src/redux/reducers/BookReducer.js
 create mode 100644 src/redux/reducers/UserReducer.js
 create mode 100644 src/redux/types/BookTypes.js
 create mode 100644 src/redux/types/UserTypes.js
 create mode 100644 src/utils/setting.js
[stage b8254fe] cho addbook vao redux
 11 files changed, 80 insertions(+), 87 deletions(-)
 rename changelog.txt => changelog.md (100%)
[stage 890388b] chinh category
 23 files changed, 192 insertions(+), 344 deletions(-)
 delete mode 100644 src/components/Books/Book.js
 delete mode 100644 src/components/Books/BookHome.js
 delete mode 100644 src/components/Books/Content.js
 delete mode 100644 src/components/Books/ShowAll.js
 rewrite src/components/Category/AllCategory.js (71%)
[stage eafb66f] update filter
 5 files changed, 15 insertions(+), 4 deletions(-)
[stage 2d70e27] update filter
 2 files changed, 3 insertions(+), 1 deletion(-)
