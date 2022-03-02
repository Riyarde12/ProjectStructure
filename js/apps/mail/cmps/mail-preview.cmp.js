


export default {
    props: ["mail"],
    template: `
        <section class="mail-preview">
            <div :style="isRead">
                <h3>{{mail.name}}</h3>
                <h4>{{mail.subject}}</h4>
               <!-- <input type="checkbox" value="Read" > -->
            </div>
        </section>
    `,
    components: {},
    created() {

    },
    data() {
        return {
        };
    },
    methods: {
    },
    computed: {
        isRead() {
            if (this.mail.isRead) return 'background-color: rgba(173, 167, 167, 0.801)';
        }
    },

    unmounted() { },
};