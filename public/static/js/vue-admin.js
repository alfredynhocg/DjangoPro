    Vue.http.headers.common['X-CSRFToken'] = "{{ csrf_token }}";
    new Vue({
      el: '#starting',
      delimiters: ['${','}'],
      data: {
        articles: [],
        loading: true,
        currentArticle: {},
        message: null,
        newArticle: { 'user_id': null, 'first_name': null ,  'last_name': null ,'gender': null ,'timezone': null ,'image': null ,'date': null },
        search_term: '',
      },
      mounted: function(event) {
        this.getArticles();
      },

      methods: {
        getArticles: function() {
          let api_url = '/messenger/api/messengeruser/';
          if(this.search_term!==''||this.search_term!==null) {
            api_url = `/messenger/api/messengeruser/?search=${this.search_term}`
          }
          this.loading = true;
          this.$http.get(api_url)
              .then((response) => {
                this.articles = response.data;
                this.loading = false;
              })
              .catch((err) => {
                this.loading = false;
                console.log(err);
              })
        },
        getArticle: function(id) {
          this.loading = true;
          this.$http.get(`/messenger/api/messengeruser/${id}/`)
              .then((response) => {
                this.currentArticle = response.data;
                swal({
                  title: 'Are you sure?',
                  text: "You won't be able to revert this!",
                  type: 'warning',
                  showCancelButton: true,
                  confirmButtonColor: '#3085d6',
                  cancelButtonColor: '#d33',
                  confirmButtonText: 'Yes, delete it!'
                }).then((result) => {
                  if (result.value) {
                    swal(
                      'Deleted!',
                      'Your file has been deleted.',
                      'success'
                    )
                  }
                })

                this.loading = false;
              })
              .catch((err) => {
                this.loading = false;
                console.log(err);
              })
        },
        addArticle: function() {
          this.loading = true;
          this.$http.post('/messenger/api/messengeruser/',this.newArticle)
              .then((response) => {
                this.loading = true;
                this.getArticles();
              })
              .catch((err) => {
                this.loading = true;
                console.log(err);
              })  
                          
        },
        updateArticle: function() {
          this.loading = true;
          this.$http.put(`/messenger/api/messengeruser/${this.currentArticle.article_id}/`, this.currentArticle)
              .then((response) => {
                this.loading = false;
                this.currentArticle = response.data;
                this.getArticles();
              })
              .catch((err) => {
                this.loading = false;
                console.log(err);
              })
        },
        deleteArticle: function(id) {
          this.loading = true;
          swal({
            title: 'Estas seguro?',
            text: "No podrás revertir esto!",
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si borralo!'
          }).then((result) => {
            if (result.value) {
            this.$http.delete(`/messenger/api/messengeruser/${id}/`)
                .then((response) => {
                  this.loading = false;
                  this.getArticles();
                })
                .catch((err) => {
                  this.loading = false;
                  console.log(err);
                })

              swal(
                'Eliminado!',
                'Su registro ha sido eliminado.',
                'success'
              )
            }
          })
        }
      }
    });