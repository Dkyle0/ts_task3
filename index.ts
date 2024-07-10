const COMMENTS_URL: string = 'https://jsonplaceholder.typicode.com/comments';

interface Comment {
	postId: number;
	id: number;
	name: string;
	email: string;
	body: string;
}

const getData = (url: string): Promise<Comment[]> => {
	const res: Promise<Response> = fetch(url);

  	return res.then(response => {
		if (!response.ok) {
		  throw new Error('Ошибка ответа сервера');
		}
		return response.json();
	  });;
}

getData(COMMENTS_URL)
  	.then((data: Comment[]) => {
		data.forEach((comment: Comment) => {
			console.log(`ID: ${comment.id}, Email: ${comment.email}`);
		})
    	
 	})
 	 .catch((error: Error) => {
   	 console.error('Ошибка:', error);
  	});
