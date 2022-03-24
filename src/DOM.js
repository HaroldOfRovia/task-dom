/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    let el = document.createElement(tag),
        el2;
    el.innerHTML = content;
    for (let i = 0; i < count; i++) {
        el2 = el.cloneNode(true);
        document.body.prepend(el2);
    }
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level, n = 1) {
    let tree = document.createElement('div');
    tree.className = 'item_' + n;
    if (n < level) {
        for (let i = 0; i < childrenCount; i++) {
            tree.prepend(generateTree(childrenCount, level, n + 1));
        }
        return tree;
    } else {
        return tree;
    }
}

/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let tree = generateTree(2, 3);
    let it2 = tree.getElementsByClassName('item_2');
    for (let i = 0; i < it2.length; i++) {
        let sec = document.createElement('section');
        sec.className = 'item_2';
        sec.innerHTML = it2[i].innerHTML;
        it2[i].replaceWith(sec);
    }
    console.log(tree.innerHTML);
    return tree;
}
