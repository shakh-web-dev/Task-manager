let todos = [
    {
        id: Math.random(),
        title: 'Купить продукты',
        description: 'Хлеб, молоко, мясо',
        position: 1
    },
    {
        id: Math.random(),
        title: 'Создать этот сайт',
        description: 'Исправить ошибку',
        position: 1
    },
    {
        id: Math.random(),
        title: 'Посмотреть фильмы и сериалы',
        description: 'Человек паук: Нет пути домой, Соник 2, Доктор Стрендж 2: Мультивселенная безумия',
        position: 2
    },
    {
        id: Math.random(),
        title: 'Проверка этого сайта',
        description: 'Исправить баг с скроллом',
        position: 3
    },
    {
        id: Math.random(),
        title: 'Добавить адаптацию в этот сайт',
        description: 'Всё работает отлично👍',
        position: 3
    },
    {
        id: Math.random(),
        title: 'Хостинг',
        description: 'Залить в гитхаб и нетлифай',
        position: 3
    }
]

//Логика

let form = document.forms.Todo


form.onsubmit = (event) => {
    event.preventDefault()

    let obj = {
        id: Math.random(),
        position: 1
    }
    let fm = new FormData(form)

    fm.forEach((value, key) => {
        obj[key] = value
    })

    todos.push(obj)

    CreateElement(todos)
}

let todo = document.querySelector('.todo .unshift-here')
let inProgress = document.querySelector('.inprogress .unshift-here')
let done = document.querySelector('.done .unshift-here')

console.log(todo);
console.log(inProgress);
console.log(done);


const CreateElement = (arr) => {
    todo.innerHTML = ""
    inProgress.innerHTML = ""
    done.innerHTML = ""
    for (let item of arr) {

        let div = document.createElement('div')
        let h3 = document.createElement('h3')
        let br = document.createElement('br')
        let p = document.createElement('p')
        let div2 = document.createElement('div')
        let leftArrow = document.createElement('div')
        let rightArrow = document.createElement('div')
        let deleteBtn = document.createElement('div')

        div.classList.add('todo-task')
        div2.classList.add('status')
        leftArrow.classList.add('arrow-left')
        rightArrow.classList.add('arrow-right')
        deleteBtn.setAttribute('id', 'delete')
        div.setAttribute('id', item.id)

        h3.innerHTML = item.title
        p.innerHTML = item.description
        leftArrow.innerHTML = `&lt;`
        rightArrow.innerHTML = `&gt;`

        div2.append(leftArrow, rightArrow, deleteBtn)
        div.append(h3, br, p, div2)
        todo.append(div)
        // console.log(div);

        function sort() {
            if (item.position == 4) {
                item.position = 1
                console.log(item.position);
            }

            if (item.position == 1) {
                todo.prepend(div)
            } else if (item.position == 2) {
                inProgress.append(div)
            } else {
                done.append(div)
            }
        }

        rightArrow.onclick = () => {
            item.position++
            div.setAttribute('position', item.position)
            console.log(item.position);
            sort()

        }

        leftArrow.onclick = () => {
            item.position--
            div.setAttribute('position', item.position)
            console.log(item.position);
            sort()
        }
        
        deleteBtn.onclick = () => {
            Delete(item.id)
            sort()
        }

        function Delete(id) {
            todos.filter(item => item.id !== id)
        }
        sort()
    }

}
CreateElement(todos)