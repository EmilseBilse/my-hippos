
export async function login(username: string, password: string) {
    // todo refactor login method
}

export async function signup(username: string, password: string) {
    // todo refactor signup method
}

export async function post(url: string, body: any) {
    try {

        const token = localStorage.getItem('token') || '';
        const response = await fetch('http://localhost:4000/api' + url, {
        method: 'POST',
        headers: {
					'Content-Type': 'application/json',
                    'auth-token': token
				},
				body: JSON.stringify(body)
        });
        if (!response.ok) {
            throw new Error("POST: " + url + " Failed, look network tab for more info");
        }

        return response.json();
        } catch (error) {
            console.error('Error during post method ' + url +':', error);
            return null;
        }
    
}

export async function put(username: string, password: string) {
    // todo refactor login method
}