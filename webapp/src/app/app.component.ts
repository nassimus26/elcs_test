import {Component, NgZone} from '@angular/core';
import {ElasticSearchService} from './elasticsearch.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  private searchInput: string;
  private message: string;
  private results: Array<any>;
  constructor(private es: ElasticSearchService, private _ngZone: NgZone) {
  }

  onSubmit() {
    this.es.addToIndex({
      id: this.guid(),
      index: this.es.indexName(),
      type: 'post',
      body: {
        userAgent: navigator.userAgent,
        time: Date.now()
      }
    }).then((result) => {
      this._ngZone.run(() => {
        this.message = 'Click added';
        console.log(result);
      });
    }, error => {
      this._ngZone.run(() => {
        this.message = 'Something went wrong, see log for more info';
        console.error(error);
      });
    });
  }

  onSearch() {
    this.es.search(this.searchInput)
      .then((searchResult) => {
        this._ngZone.run(() => {
          this.results = ((searchResult.hits || {}).hits || [])// extract results from elastic response
            .map((hit) => hit._source);
          if (this.results.length > 0) {
            this.message = this.results.length + ' result' + (this.results.length > 1 ? 's' : '');
          } else {
            this.message = 'nothing was found';
          }
        });
      })
      .catch((error) => {
        this.message = 'Error happens';
      });
  }

  guid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4();
  }

}
