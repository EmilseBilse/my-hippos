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
            throw new Error("HTTP error! status: " + response.status);
        }

        return response.json();
        } catch (error) {
            console.error('Error during post method ' + url +':', error);
            return null;
        }
    
}

export async function put(url: string, body: any) {
    // todo refactor login method
}

export async function get(url: string) {
    try {
        const token = localStorage.getItem('token') || '';
        const response = await fetch('http://localhost:4000/api' + url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'auth-token': token
            }
        });
        if (!response.ok) {
            throw new Error('HTTP error! status: ' + response.status);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Could not fetch data", error)
    }
    
    
}