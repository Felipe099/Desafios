const booksByCategory = [
  {
    category: 'Riqueza',
    books: [
      {
        title: 'OS segredos da mente milionária',
        author: 'T. Harv Eker'
      },
      {
        title: 'O homem mais rico da Babilônia',
        author: 'George S. Clason'
      },
      {
        title: 'Pai rico, pai pobre',
        author: 'Robert T. Kiyosaki e Sharon L. Lecther'
      }
    ]
  },
  {
    category: 'Inteligência Emocional',
    books: [
      {
        title: 'Você é Insubstituível',
        author: 'Augusto Cury'
      },
      {
        title: 'Ansiedade - Como enfrentar o mal do século',
        author: 'Augusto Cury'
      },
      {
        title: 'Os 7 hábitos das pessoas altamente eficazes',
        author: 'Stephen R. Covey'
      }
    ]
  }
]

const totalCategories = booksByCategory.length
console.log(totalCategories)

for (category of booksByCategory) {
  console.log('Total de livros da categoria:', category.category)
  console.log(category.books.length)
}

function countAuthors() {
  let authors = []

  for (let category of booksByCategory) {
    for (let books of category.books) {
      if (authors.indexOf(books.author) == -1) {
        authors.push(books.author)
      }
    }
  }
  console.log('Total de autores:', authors.length)
}
countAuthors()

function mostrarLivros() {
  let livros = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === 'Augusto Cury') {
        livros.push(book.title)
      }
    }
  }
  console.log('Livros do autor:', livros)
}
mostrarLivros()

function livrosDoAutor(author) {
  let livros = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.author === author) {
        livros.push(book.title)
      }
    }
  }
  console.log(`livros do autor ${author}: ${livros.join(', ')}`)
}
livrosDoAutor('George S. Clason')

function escritor(title) {
  let livros = []

  for (let category of booksByCategory) {
    for (let book of category.books) {
      if (book.title === title) {
        livros.push(book.author)
      }
    }
  }
  console.log(`O escritor é ${livros}`)
}
escritor('Os 7 hábitos das pessoas altamente eficazes')
