import "../page/Home.css"
import React, { useEffect, useState } from 'react';

const Home = () => {
    const [questions, setQuestions] = useState([]);
    const [search, setSearch] = useState('');

    const getData = async () => {
        try {
            const response = await fetch('http://localhost:3001/question');
            if (response.ok) {
                const data = await response.json();
                setQuestions(data);
            } else {
                console.error('Failed to fetch data');
            }
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    const filteredQuestions = questions.filter((item) => {
        const questionText = `${item.question}`;
        return questionText.toLowerCase().includes(search.toLowerCase());
    });

    return (
        <div className="container">
            <div id="search-btn">
                <input
                    onChange={(e) => setSearch(e.target.value)}
                    type="text"
                    placeholder="Search question"
                />
                <button id="search">Search</button>
            </div>

            {filteredQuestions.length > 0 ? (
                <table className="table">
                    <thead>
                        <tr>
                            <th>Question</th>
                            <th>Answer</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredQuestions.map((item) => (
                            <tr key={item._id}>
                                <td>
                                    {item.question}
                                </td>
                                <td>{item.answer}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="empty-state">No questions found</p>
            )}
        </div>
    );
};

export default Home;
