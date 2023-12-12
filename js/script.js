// nav dropdown
const $dropdown = $(".dropdown");
const $dropdownToggle = $(".dropdown-toggle");
const $dropdownMenu = $(".dropdown-menu");
const showClass = "show";
$(window).on("load resize", function() {
  if (this.matchMedia("(min-width: 768px)").matches) {
    $dropdown.hover(
      function() {
        const $this = $(this);
        $this.addClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "true");
        $this.find($dropdownMenu).addClass(showClass);
      },
      function() {
        const $this = $(this);
        $this.removeClass(showClass);
        $this.find($dropdownToggle).attr("aria-expanded", "false");
        $this.find($dropdownMenu).removeClass(showClass);
      }
    );
  } else {
    $dropdown.off("mouseenter mouseleave");
  }
});


// 分頁
const list_items = [
  'item 1',
  'item 2',
  'item 3',
  'item 4',
  'item 5',
  'item 6',
  'item 7',
  'item 8',
  'item 9',
  'item 10',
  'item 11',
  'item 12',
  'item 13',
  'item 14',
  'item 15',
  'item 16',
  'item 17',
  'item 18',
  'item 19',
  'item 20',
  'item 21',
  'item 22',
];
const list_element = document.querySelector('#list');
const pagination_element = document.querySelector('#pagination');

let current_page = 1; // 當前頁面
let rows = 4; // 顯示筆數

// 顯示element function
function DisplayList (items, wrapper, row_per_page, page) {
  wrapper.innerHTML = '';
  page--;

  let start = row_per_page * page;
  let end = start + row_per_page
  let paginatedItems = items.slice(start, end);

  for (let i = 0; i < paginatedItems.length; i++) {
      let item = paginatedItems[i];
      const item_element = document.createElement('div');
      item_element.setAttribute('class', 'item');
      item_element.textContent = item;
      wrapper.appendChild(item_element);
  }
}
// 顯示Pagination element function
function SetupPagination (items, wrapper, rows_per_page) {
  wrapper.innerHTML = '';

  let page_count = Math.ceil(items.length / rows_per_page);
  for (let i = 1; i < page_count + 1; i++) {
      let btn = PaginationButton(i, items);
      wrapper.appendChild(btn);
  }
}

// 監聽Pagination Button function
function PaginationButton(page, items) {
  const li = document.createElement('li');
  li.textContent = page;
  if (current_page === page) {
      li.classList.add('active');
  }
  // button
  li.addEventListener('click', () => {
      current_page = page;
      DisplayList(items, list_element, rows, current_page);
      let current_btn = document.querySelector('.pagenumbers li.active ');
      current_btn.classList.remove('active');
      li.classList.add('active');
  })
  return li;
}
DisplayList(list_items, list_element, rows, current_page);
SetupPagination(list_items, pagination_element, rows);