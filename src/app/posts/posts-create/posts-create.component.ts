import { Component } from "@angular/core";
  
@Component(
    {   selector: 'app-post-create',
        templateUrl: './posts-create.component.html',
    }
)

export class PostsCreateComponent{
    newPost = 'NO CONTENT';
    enteredValue = '';


    onAddPost(){
        this.newPost = 'the user\'s post'

        
    }

}