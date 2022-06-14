let todos = [
    {
        id: Math.random(),
        description: 'Купить продукты',
        title: 'Хлеб, молоко, мясо',
        position: 1
    },
    {
        id: Math.random(),
        description: 'asdsad',
        title: 'asdasd, asdas d, asdasdsddasd',
        position: 2
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
        let h2 = document.createElement('h2')
        let br = document.createElement('br')
        let p = document.createElement('p')
        let div2 = document.createElement('div')
        let leftArrow = document.createElement('div')
        let rightArrow = document.createElement('div')

        div.classList.add('todo-task')
        div2.classList.add('status')
        leftArrow.classList.add('arrow-left')
        rightArrow.classList.add('arrow-right')
        div.setAttribute('id', item.id)

        h2.innerHTML = item.title
        p.innerHTML = item.description
        leftArrow.innerHTML = `&lt;`
        rightArrow.innerHTML = `&gt;`



        div2.append(leftArrow, rightArrow)
        div.append(h2, br, p, div2)
        todo.append(div)
        console.log(div);


        rightArrow.onclick = () => {
            item.position++
            console.log(item.position);

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

        leftArrow.onclick = () => {
            item.position--
            console.log(item.position);
            if (item.position == 0) {
                item.position = 3
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
    }

}
CreateElement(todos)